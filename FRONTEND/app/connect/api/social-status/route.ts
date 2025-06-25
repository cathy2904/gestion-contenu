import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import axios from 'axios'

export async function GET() {
  const token = (await cookies()).get('token')?.value
  if (!token) return NextResponse.json({ facebook: false, instagram: false, linkedin: false })

  try {
    const res = await axios.get('http://localhost:3000/user/social-status', {
      headers: { Authorization: `Bearer ${token}` },
    })
    return NextResponse.json(res.data)
  } catch (err) {
    return NextResponse.json({ facebook: false, instagram: false, linkedin: false })
  }
}
