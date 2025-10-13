import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

const MONGO_URL = process.env.MONGO_URL;
let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(MONGO_URL, {
    maxPoolSize: 10,
    minPoolSize: 2,
  });

  const db = client.db('autofurnish');

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

// Helper function to handle CORS
function setCorsHeaders(response) {
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}

// Handle OPTIONS requests for CORS
export async function OPTIONS() {
  return setCorsHeaders(new NextResponse(null, { status: 200 }));
}

// GET handler
export async function GET(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const path = params.path || [];
    const endpoint = path.join('/');

    // Dashboard stats endpoint
    if (endpoint === 'dashboard/stats') {
      const stats = {
        totalCreateSticker: 12456,
        inventoryIn: 8234,
        inventoryOut: 6789,
        inventoryReserve: 1445,
        inventoryRTOIn: 567,
        activeProducts: 2345,
        totalOrders: 15678,
        totalInvoices: 14234,
      };
      return setCorsHeaders(NextResponse.json(stats));
    }

    // Products endpoint
    if (endpoint === 'products') {
      const products = await db.collection('products').find({}).limit(100).toArray();
      return setCorsHeaders(NextResponse.json(products));
    }

    // Orders endpoint
    if (endpoint === 'orders') {
      const orders = await db.collection('orders').find({}).limit(100).toArray();
      return setCorsHeaders(NextResponse.json(orders));
    }

    // Inventory endpoint
    if (endpoint === 'inventory') {
      const inventory = await db.collection('inventory').find({}).limit(100).toArray();
      return setCorsHeaders(NextResponse.json(inventory));
    }

    // Vendors endpoint
    if (endpoint === 'vendors') {
      const vendors = await db.collection('vendors').find({}).limit(100).toArray();
      return setCorsHeaders(NextResponse.json(vendors));
    }

    // Users endpoint
    if (endpoint === 'users') {
      const users = await db.collection('users').find({}).limit(100).toArray();
      return setCorsHeaders(NextResponse.json(users));
    }

    return setCorsHeaders(NextResponse.json({ 
      message: 'AutoFurnish API is running',
      version: '1.0.0',
      endpoints: [
        '/api/dashboard/stats',
        '/api/products',
        '/api/orders',
        '/api/inventory',
        '/api/vendors',
        '/api/users'
      ]
    }));
  } catch (error) {
    console.error('GET Error:', error);
    return setCorsHeaders(
      NextResponse.json(
        { error: 'Internal Server Error', details: error.message },
        { status: 500 }
      )
    );
  }
}

// POST handler
export async function POST(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const path = params.path || [];
    const endpoint = path.join('/');
    const body = await request.json();

    // Create product
    if (endpoint === 'products') {
      const result = await db.collection('products').insertOne({
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return setCorsHeaders(NextResponse.json({ success: true, id: result.insertedId }));
    }

    // Create order
    if (endpoint === 'orders') {
      const result = await db.collection('orders').insertOne({
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return setCorsHeaders(NextResponse.json({ success: true, id: result.insertedId }));
    }

    // Create inventory record
    if (endpoint === 'inventory') {
      const result = await db.collection('inventory').insertOne({
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return setCorsHeaders(NextResponse.json({ success: true, id: result.insertedId }));
    }

    // Create vendor
    if (endpoint === 'vendors') {
      const result = await db.collection('vendors').insertOne({
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return setCorsHeaders(NextResponse.json({ success: true, id: result.insertedId }));
    }

    // Create invoice
    if (endpoint === 'invoices') {
      const result = await db.collection('invoices').insertOne({
        ...body,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      return setCorsHeaders(NextResponse.json({ success: true, id: result.insertedId }));
    }

    // Generate sticker
    if (endpoint === 'stickers/generate') {
      const result = await db.collection('stickers').insertOne({
        ...body,
        uid: `UID-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date(),
      });
      return setCorsHeaders(NextResponse.json({ success: true, id: result.insertedId, uid: result.uid }));
    }

    // Upload sales data
    if (endpoint === 'sales/upload') {
      const result = await db.collection('sales').insertMany(
        Array.isArray(body) ? body : [body]
      );
      return setCorsHeaders(NextResponse.json({ success: true, count: result.insertedCount }));
    }

    return setCorsHeaders(
      NextResponse.json(
        { error: 'Endpoint not found' },
        { status: 404 }
      )
    );
  } catch (error) {
    console.error('POST Error:', error);
    return setCorsHeaders(
      NextResponse.json(
        { error: 'Internal Server Error', details: error.message },
        { status: 500 }
      )
    );
  }
}

// PUT handler
export async function PUT(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const path = params.path || [];
    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return setCorsHeaders(
        NextResponse.json(
          { error: 'ID is required for update' },
          { status: 400 }
        )
      );
    }

    const collection = path[0] || 'products';
    const result = await db.collection(collection).updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, updatedAt: new Date() } }
    );

    return setCorsHeaders(
      NextResponse.json({ 
        success: result.modifiedCount > 0,
        modifiedCount: result.modifiedCount 
      })
    );
  } catch (error) {
    console.error('PUT Error:', error);
    return setCorsHeaders(
      NextResponse.json(
        { error: 'Internal Server Error', details: error.message },
        { status: 500 }
      )
    );
  }
}

// DELETE handler
export async function DELETE(request, { params }) {
  try {
    const { db } = await connectToDatabase();
    const path = params.path || [];
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return setCorsHeaders(
        NextResponse.json(
          { error: 'ID is required for deletion' },
          { status: 400 }
        )
      );
    }

    const collection = path[0] || 'products';
    const result = await db.collection(collection).deleteOne(
      { _id: new ObjectId(id) }
    );

    return setCorsHeaders(
      NextResponse.json({ 
        success: result.deletedCount > 0,
        deletedCount: result.deletedCount 
      })
    );
  } catch (error) {
    console.error('DELETE Error:', error);
    return setCorsHeaders(
      NextResponse.json(
        { error: 'Internal Server Error', details: error.message },
        { status: 500 }
      )
    );
  }
}
