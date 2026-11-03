# FILE BACKEND DISINI

File backend untuk Sistem Informasi PT. ABC, server backend dan database akan
berada pada mesin yang sama, jadi kita gunakan saja `SQLite` agar sederhana.

## Project Details

### Frameworks / Libraries
- ExpressJS
- Drizzle ORM

### Development Setup
Untuk menginstal alat untuk development lokal, jalankan pada folder `backend`:
```sh
npm install
```

### Database Migration System
Untuk merubah schema database, gunakan pendekatan "codebase first" dari
drizzle, lihat [opsi 3](https://orm.drizzle.team/docs/sqlite/migrations) untuk
penjelasan,
+ Ubah `src/db/schema.ts` untuk mencerminkan schema proyek yang terbaru
+ Jalankan `npx drizzle-kit generate` untuk membuat file migrasi
+ Jika migrasi tepat, jalankan `npx drizzle-kit migrate`
