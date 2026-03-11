import bcrypt from 'bcrypt';

export async function GET() {
  const hash =
    '$2b$10$dVNiUVJ9IPyxHwgRQVjQ6evp6xojzaVE8aZ2nTKXFT3XOYtd0/zw.';
  const result = await bcrypt.compare('123456', hash);
  return Response.json({ result });
}