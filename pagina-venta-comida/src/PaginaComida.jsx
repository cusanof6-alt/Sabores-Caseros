import React from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const comidas = [
  {
    nombre: "Hamburguesa Clásica",
    descripcion: "Carne, queso, lechuga, tomate y salsas.",
    precio: "$250",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    whatsapp: "59891234567",
  },
  {
    nombre: "Pizza Napolitana",
    descripcion: "Mozzarella, tomate y orégano.",
    precio: "$300",
    imagen: "https://images.unsplash.com/photo-1601924582975-4cc5b09c38a7",
    whatsapp: "59891234567",
  },
  {
    nombre: "Empanadas Caseras",
    descripcion: "Variedad de sabores: carne, jamón y queso, verdura.",
    precio: "$80 c/u",
    imagen: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    whatsapp: "59891234567",
  },
];

export default function PaginaComida() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">¡Delicias Caseras!</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {comidas.map((comida, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden">
              <img
                src={comida.imagen}
                alt={comida.nombre}
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{comida.nombre}</h2>
                <p className="text-sm text-gray-600 mb-2">{comida.descripcion}</p>
                <p className="text-lg font-bold mb-4">{comida.precio}</p>
                <a
                  href={`https://wa.me/${comida.whatsapp}?text=Hola!%20Quisiera%20comprar%20una%20${encodeURIComponent(
                    comida.nombre
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full gap-2">
                    <PhoneCall className="w-4 h-4" /> Contactar por WhatsApp
                  </Button>
                </a>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}