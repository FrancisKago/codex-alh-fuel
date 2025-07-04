# ALH Fuel Management

This repository contains the source code for a fuel management application for Groupe ALH.
It is built with Next.js and Supabase.

## Getting Started

1. Install Node.js 20+
2. Copy `frontend/.env.example` to `frontend/.env` and fill in your Supabase credentials.
3. Install dependencies:
   ```sh
   cd frontend && npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## Database

SQL schema files are located in the `database/` directory. Apply them in your Supabase project to create the required tables.

## Tests

Run `npm test` from the `frontend` directory to execute unit tests.

## License

This project is licensed under the MIT License.

## Offline Support

A basic service worker is registered in `_app.tsx` to cache assets and API responses. Pending transactions can be stored in IndexedDB and synchronized when connectivity returns.
See [LICENSE](LICENSE) for license details.
