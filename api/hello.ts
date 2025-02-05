import {Request} from '@vercel/functions'
export async function GET(req: Request) {
    const response = await fetch('https://api.vercel.app/products');
    const products = await response.json();
    return products;
}
  