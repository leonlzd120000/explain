# explain to me

## Purpose

Turn a user-provided topic into a polished explanatory web page that can be shared through GitHub Pages.

Use this workflow when the user says:

```text
explain to me: <topic>
```

or asks FE to build a website that explains a concept.

## Owner

Hermes profile: `fe`

Default project:

```text
/Users/lee/Documents/Hermes/explain
```

Public preview:

```text
https://leonlzd120000.github.io/explain/
```

## Workflow

0. Run the understanding skill first.
   - Load/call `understand-explain` from:

     ```text
     /Users/lee/.agents/skills/understand-explain/SKILL.md
     ```

   - Use it as the first reasoning pass before designing the page.
   - If `.understand-anything/knowledge-graph.json` exists, use the skill to inspect the relevant project/topic context.
   - If the knowledge graph does not exist, note the limitation briefly and continue with the explanatory website workflow.

1. Interpret the topic.
   - Identify the target audience.
   - Decide the single learning outcome.
   - Convert the topic into a clear page structure.

2. Design the explanation.
   - Use the output or constraints from `understand-explain` as source context.
   - Use the `frontend-design` skill by default.
   - Choose a visual metaphor specific to the topic.
   - Include one memorable interactive or animated element when useful.
   - Avoid generic landing-page filler.

3. Build the page.
   - Edit the existing Vite React project.
   - Keep the first screen useful and explanatory.
   - Use real UI states, diagrams, labels, and progressive sections.
   - Use responsive CSS for desktop, tablet, and mobile.
   - Avoid horizontal scrolling, overlapping text, and oversized controls on mobile.

4. Verify locally.
   - Run:

     ```bash
     npm run build
     ```

   - Check that the build succeeds.
   - When possible, inspect the page in browser at mobile and desktop widths.

5. Commit and push.
   - Commit with a concise message, for example:

     ```bash
     git add .
     git commit -m "feat: explain <topic>"
     git push
     ```

6. Confirm deployment.
   - GitHub Actions deploys `dist` to GitHub Pages.
   - Check the latest run:

     ```bash
     gh run list --repo leonlzd120000/explain --limit 1
     ```

   - Confirm the Pages URL returns `HTTP 200`.

## Final Response Format

Keep the final response short:

```text
完成：<topic> 讲解页面已生成并部署。

预览：https://leonlzd120000.github.io/explain/
验证：npm run build ✓ / GitHub Actions ✓ / mobile responsive ✓
提交：<commit>
```

## Quality Bar

- The page teaches the concept, not just describes it.
- Mobile layout is a first-class requirement.
- The page must feel intentionally designed for the topic.
- The final URL must be shareable in Discord.
