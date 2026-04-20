'use client'

import { useEffect, useState, useMemo, useRef } from 'react'
import dynamic from 'next/dynamic'

const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), { ssr: false })

export default function KnowledgeGraph() {
  const [data, setData] = useState<{ nodes: any[], links: any[] }>({ nodes: [], links: [] })
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  
  const fetchGraphData = async () => {
    setIsLoading(true)
    try {
      const res = await fetch('/api/graph')
      const d = await res.json()
      setData(d)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isOpen) fetchGraphData()
  }, [isOpen])

  return (
    <div className="knowledge-graph-container">
      <button className="graph-trigger-btn" onClick={() => setIsOpen(true)}>
        <span className="sigil">🕸️</span>
        <span className="label">Open Knowledge Graph</span>
      </button>

      {isOpen && (
        <div className="graph-modal">
          <header className="graph-modal__header">
            <div className="graph-modal__title">
              <span className="sigil">✦</span>
              <h3>Research Universe</h3>
            </div>
            <button className="graph-modal__close" onClick={() => setIsOpen(false)}>×</button>
          </header>

          <div className="graph-modal__canvas">
            {isLoading ? (
              <div className="graph-loader">Mapping the archive...</div>
            ) : (
              <ForceGraph2D
                graphData={data}
                nodeAutoColorBy="type"
                nodeLabel="label"
                nodeCanvasObject={(node, ctx, globalScale) => {
                  if (node.x === undefined || node.y === undefined) return;
                  const label = node.label || '';
                  const fontSize = 12/globalScale;
                  ctx.font = `${fontSize}px var(--font-ui)`;
                  const textWidth = ctx.measureText(label).width;

                  // Fill circle based on type
                  ctx.fillStyle = node.color || '#fff';
                  ctx.beginPath(); 
                  ctx.arc(node.x, node.y, 4, 0, 2 * Math.PI, false); 
                  ctx.fill();

                  // Text
                  ctx.textAlign = 'center';
                  ctx.textBaseline = 'middle';
                  ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                  ctx.fillText(label, node.x, node.y + (10 / globalScale));
                }}
                linkColor={() => 'rgba(200, 168, 74, 0.15)'}
                backgroundColor="#0a0a0f"
                onNodeClick={(node) => {
                  const id = node.id?.toString();
                  if (!id) return;
                  
                  if (id.startsWith('note-')) {
                    window.location.href = `/notes?id=${id.replace('note-', '')}`
                  } else if (id.startsWith('saturn-')) {
                    window.location.href = `/saturn#${id.replace('saturn-', '')}`
                  } else {
                    window.location.href = `/arcane/${id}`
                  }
                }}
              />
            )}
          </div>
          
          <footer className="graph-modal__footer">
            <p>Click nodes to navigate · Purple: Notes · Gold: Archive Entries</p>
          </footer>
        </div>
      )}
    </div>
  )
}
