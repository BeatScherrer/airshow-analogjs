asset_dir := "public"
asset_clinic_mover := "{{asset_dir}}/clinic_mover"

default:
  just -l

dev:
    pnpm start --host

build:
  pnpm run build

