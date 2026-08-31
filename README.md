# Camelliera Host

Starter monorepo for a Discord bot hosting panel.

## Architecture
- `apps/web`: Next.js 15 panel for Vercel
- `apps/worker`: Node.js worker for a Linux VPS with Docker
- PostgreSQL-compatible DB via Prisma

## Quick start

### Web
```bash
cd apps/web
cp .env.example .env.local
npm install
npx prisma generate
npm run dev
```

Deploy `apps/web` to Vercel.

### Worker
```bash
cd apps/worker
cp .env.example .env
npm install
npm run build
npm start
```

Run worker on a VPS with Docker installed. Do NOT run customer bot processes directly on Vercel.

## Important security notes
This is a starter. Before selling hosting publicly, add:
- real object storage (R2/S3) instead of local zip upload handoff
- signed upload URLs
- per-user quotas + rate limits
- container seccomp/AppArmor, read-only rootfs where possible
- no Docker socket exposed to the public internet
- audit logging and backups
