import { NextResponse } from 'next/server';
import { Client } from '@gradio/client';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const personImage = await formData.get('person_img');
    const garmentImage = await formData.get('garment_img');
    const seed = parseFloat(formData.get('seed') || '0');
    const randomizeSeed = formData.get('randomize_seed') === 'true';
    const client = await Client.connect('Kwai-Kolors/Kolors-Virtual-Try-On');
    const result = await client.predict('/tryon', {
      person_img: personImage,
      garment_img: garmentImage,
      seed,
      randomize_seed: randomizeSeed,
    });

    return NextResponse.json({
      image: result[0],
      seed: result[1],
      response: result[2],
    });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}