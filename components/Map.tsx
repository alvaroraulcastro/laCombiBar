'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const BAR_LAT_LNG: L.LatLngTuple = [-40.573269, -73.133258]

export default function Map() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const map = L.map('map', {
      center: BAR_LAT_LNG,
      zoom: 17,
      scrollWheelZoom: false,
    })

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map)

    L.marker(BAR_LAT_LNG, { icon: markerIcon })
      .addTo(map)
      .bindPopup('<strong>La Combi Bar</strong><br>Eleuterio Ramirez 764, Osorno')
      .openPopup()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div id="map" className="bg-gray-200 rounded-xl h-64 md:h-80 w-full" />
  )
}