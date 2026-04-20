# Enhancement Roadmap: The Archive Dashboard

We've successfully expanded the dashboard width and added a **Quick Note Widget** for seamless annotation while reading. Below are the planned enhancement phases to turn The Archive into a world-class research tool.

## Phase 1: Knowledge Organization COMPLETED

*   **🏷️ Tagging System**: Allow users to add tags (e.g., #Alchemy, #Plato, #Guenon) to notes for better filtering.
*   **📂 Collections**: Group notes and bookmarks into themed folders or "workspaces".
*   **🔍 Global Search**: A powerful search bar in the dashboard to find keywords across all notes and archive content.
*   **⭐ Favorites**: Mark specific notes or chapters as favorites for instant access.

## Phase 2: Enhanced Editor experience COMPLETED

*   **📝 Markdown Support**: Implement a Markdown parser (like `react-markdown`) so users can use bold, italics, lists, and headers in their notes.
*   **🖋️ Auto-linking**: Automatically detect when a note mentions a term in the **Arcane Archive** and link to it.
*   **🎞️ Media embedding**: Allow pasting image URLs or uploading small screenshots into notes.
*   **☁️ Auto-save**: Ensure notes are saved every few seconds to prevent data loss.

## Phase 3: Active Reading & Interaction COMPLETED

*   **🖱️ Highlight-to-Note**: Select text on any reading page to trigger a "Create Note" popup that includes the quoted text automatically.
*   **🌗 Theming Engine**: Switch between reading modes:
    *   **Midnight** (Current default)
    *   **Papyrus** (Light mode / sepia for easier daytime reading)
    *   **Monolith** (High contrast)
*   **📊 Reading progress**: A visual heat-map or progress bar for each long-form study.

## Phase 4: AI-Assisted Research COMPLETED

*   **🧠 Synthesis**: Use an LLM to summarize my notes on a specific topic.
*   **💬 Archive AI Chat**: Ask questions directly to the text (e.g., "What did Guenon say about the Black Cube?") while reading.
*   **🔗 Connection Discovery**: Have the AI suggest related chapters or archive entries based on the note you just wrote.

---

> VERSION 2.0 COMPLETE

# VERSION 2.1 - Identity, Roles & Privacy COMPLETED

## Role-Based AI Access:

*   **Admins**: When an Admin (like yourself) uses the Research Assistant or Summarizer, the system uses your project's global OPENROUTER_API_KEY stored in your environment variables.
*   **Regular Users**: To protect your API budget and their privacy, regular users are now required to provide their own OpenRouter API Key. If they attempt to use the AI without one, the Archive Spirit will politely direct them to their Settings.
*   **Privacy-First (BYOK)**: User-provided API keys are stored locally in the browser. They are never saved to your database, ensuring your users maintain full control over their own AI accounts and costs.
*   **I've updated the AI API route to look for a specialized header (X-User-OpenRouter-Key) that is only injected if the user is not an Admin.
*   **Identity & Settings Dashboard:**
    *   **A new Settings & Identity page is now available in the Dashboard.
    *   **Users can see their current Role (ADMIN vs. USER).
    *   **They can securely input and save their own AI credentials.
*   **Database Infrastructure:**
    *   **I've added a profiles table to your Supabase schema.
    *   **Automatic Profile Creation**: I implemented a PostgreSQL trigger that automatically creates a "Regular User" profile for every new person who signs up, streamlining the onboarding process.

# ⚙️ Version 2.1.2: Advanced Management & Scholarly Identity COMPLETED

*   **The new Settings dashboard is designed to feel like a premium administrative interface:**
    *   **Scholarly Tab System**: I've implemented a high-performance tabbed layout to separate different areas of control:
        *   **✦ Scholarly Identity**: Personalize your researcher profile by setting a Display Name and Full Name, which are now synced to your profiles table in the database.
        *   **⚡ AI Infrastructure**: Manage your BYOK (Bring Your Own Key) credentials. I've added a "Test" feature that validates your API key against OpenRouter's live server in real-time before you save it.
        *   **🔒 Security & Data**: Features a new "Danger Zone" for advanced maintenance, such as clearing local caches or resetting browser-stored data without affecting your cloud notes.
    *   **Toasted Notifications**: I built a custom, animated notification system ("Toasts") that provides elegant visual feedback for successes and errors, perfectly aligned with the Archive's aesthetic.
    *   **Rich Interaction**:
        *   **Key Validation**: No more guessing if your API key works. The "Test" button handles the verification logic immediately.
        *   **Responsive Design**: The interface uses smooth CSS animations for tab switching and toast transitions, ensuring a premium feel.
        *   **Identity Persistence**: Your researcher metadata is now properly persisted across the application, allowing for more personalized "Shared Snapshots" in the future.