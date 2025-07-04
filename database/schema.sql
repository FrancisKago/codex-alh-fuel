-- Users and authentication
create table if not exists users (
  id uuid primary key,
  email text not null unique,
  role text not null,
  profile_data jsonb
);

create table if not exists user_permissions (
  user_id uuid references users(id),
  permission_type text,
  primary key (user_id, permission_type)
);

-- Vehicles
create table if not exists vehicles (
  id uuid primary key,
  registration text,
  type text,
  capacity numeric,
  fuel_type text
);

create table if not exists vehicle_assignments (
  vehicle_id uuid references vehicles(id),
  driver_id uuid references users(id),
  supervisor_id uuid references users(id)
);

-- Worksites and depots
create table if not exists worksites (
  id uuid primary key,
  name text,
  location text,
  supervisor_id uuid references users(id)
);

create table if not exists fuel_depots (
  id uuid primary key,
  name text,
  location text,
  current_stock numeric
);

-- Fuel requests and transactions
create table if not exists fuel_requests (
  id uuid primary key,
  driver_id uuid references users(id),
  vehicle_id uuid references vehicles(id),
  quantity numeric,
  status text,
  approver_id uuid references users(id)
);

create table if not exists fuel_transactions (
  id uuid primary key,
  request_id uuid references fuel_requests(id),
  actual_quantity numeric,
  location text,
  timestamp timestamptz default now()
);

-- Stock movements and deliveries
create table if not exists stock_movements (
  id uuid primary key,
  depot_id uuid references fuel_depots(id),
  type text,
  quantity numeric,
  timestamp timestamptz default now()
);

create table if not exists fuel_deliveries (
  id uuid primary key,
  depot_id uuid references fuel_depots(id),
  quantity numeric,
  delivery_date date,
  cost numeric
);

-- Maintenance
create table if not exists maintenance_schedules (
  id uuid primary key,
  vehicle_id uuid references vehicles(id),
  type text,
  due_km numeric,
  due_date date
);

create table if not exists maintenance_records (
  id uuid primary key,
  vehicle_id uuid references vehicles(id),
  type text,
  date date,
  cost numeric,
  description text
);

-- Audit trail
create table if not exists audit_trail (
  id uuid primary key,
  user_id uuid references users(id),
  action text,
  table_name text,
  record_id uuid,
  timestamp timestamptz default now()
);
