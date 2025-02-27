import React from 'react';
import { PlacementCard } from './PlacementCard';

export function TopPlacements() {
  const placements = [
    {
      company: "Microsoft",
      name: "Ameya Ohri",
      role: "Software Engineer",
      package: "54.75",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    },
    {
      company: "Amazon",
      name: "Abhishek Dimri",
      role: "SDE",
      package: "52.11",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80"
    },
    {
      company: "Palo Alto",
      name: "Vandana Chauhan",
      role: "Security Engineer",
      package: "50.25",
      logo: "https://www.paloaltonetworks.com/content/dam/pan/en_US/images/logos/brand/primary-company-logo-color-white/PANW_Parent_Brand_Primary_Logo_RGB_Red_White.png",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {placements.map((placement, index) => (
        <PlacementCard key={index} {...placement} />
      ))}
    </div>
  );
}