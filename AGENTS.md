<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep portfolio project content in the typed `src/data/projects.ts` array; adding an entry must render a project without editing the presentation.
- The portfolio is an explicitly scrolling single-page experience in `src/components/portfolio.tsx`, mounted at `/`, with anchor navigation to its sections.
- Store screenshot media as Lovable Assets pointer files and import generated artwork directly; this keeps real project previews separate from portfolio presentation.
- Keep contact destinations unconfigured until supplied by the owner; never infer email addresses or social account URLs from a name.
- Edit project source files only with the file edit tools, never with in-place shell rewrites (sed/awk/output redirection); the workspace sync restores its own copy and silently drops out-of-band edits.
