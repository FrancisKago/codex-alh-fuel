# ALH Fuel Management

This project implements a fuel management application for **Groupe ALH** as
described in the PRD.  It uses **Next.js** for the frontend and **Supabase** for
authentication and data storage.  The application supports offline usage via a
service worker and local caching.

## Getting Started

1. Install **Node.js 20+**.
2. Copy `frontend/.env.example` to `frontend/.env` and fill in your Supabase
   credentials.
3. Install dependencies (requires internet access):
   ```sh
   cd frontend
   npm install
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```

## Database

SQL schema files are located in the `database/` directory. Apply them in your Supabase project to create the required tables.

## Tests

Run `npm test` from the `frontend` directory to execute unit tests. Linting is
performed with `npm run lint`.

## License

This project is licensed under the MIT License.

## Offline Support

A basic service worker is registered in `_app.tsx` to cache assets and API responses. Pending transactions can be stored in IndexedDB and synchronized when connectivity returns.
See [LICENSE](LICENSE) for license details.

## Contributing

1. Fork the repository and create a feature branch.
2. Ensure `npm test` and `npm run lint` pass before opening a pull request.
3. Describe your changes clearly in the PR description.
