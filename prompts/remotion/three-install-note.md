# Remotion 3D Install Note

The requested 3D scene specs require extra packages that are not installed yet:

```bash
npm install -D @remotion/three three @react-three/fiber @react-three/drei
```

This is a separate install from the already-approved Remotion core packages. It will download and execute new npm package install scripts, so it requires explicit action-time confirmation before Codex runs it.

After installation, build these compositions first:

1. `AgentConstellation` - 16 agents on a rotating sphere, central MedAlly node.
2. `DocumentationTimeBar` - 70 percent documentation reduction.
3. `DiagnosticAccuracyGauge` - 93 percent gauge.
4. `AmbientScribeLoop` - transparent website hero loop.
