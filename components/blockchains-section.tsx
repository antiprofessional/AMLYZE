"use client"

import { motion } from "framer-motion"
import { Shield } from "lucide-react"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function BlockchainsSection() {
  const blockchains = [
    {
      name: "Bitcoin",
      icon: "https://img3.teletype.in/files/a4/a3/a4a36f42-d515-4dea-8d04-47b6cb8e7334.jpeg",
    },
    {
      name: "Ethereum",
      icon: "https://img2.teletype.in/files/90/ee/90ee7923-0e47-40e0-a9ef-cd2ecaf869be.jpeg",
    },
    {
      name: "Solana",
      icon: "https://img4.teletype.in/files/7d/d0/7dd05c64-b87c-4985-9637-67253366371a.jpeg",
    },
    {
      name: "Polygon",
      icon: "https://img4.teletype.in/files/78/19/7819296f-af4a-497f-aa4c-830a94a91676.jpeg",
    },
    {
      name: "Binance",
      icon: "https://img1.teletype.in/files/01/d2/01d2efc3-0c1d-4660-b0de-af00379998c0.jpeg",
    },
    {
      name: "Cardano",
      icon: "https://img4.teletype.in/files/72/ef/72ef025c-9e61-49e5-aa83-287fe1d0292f.jpeg",
    },
  ]

  return (
    <section className="py-20 border-b border-primary/10 relative z-10 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Shield className="h-4 w-4 text-primary" strokeWidth={2} />
            <span className="text-xs font-medium">Wide Coverage</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Supported <span className="text-primary">Blockchains</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto">
            We support all major cryptocurrencies and blockchain networks
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {blockchains.map((chain, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="flex items-center gap-3 bg-gray-900 rounded-full px-6 py-3 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(12,254,246,0.3)] group"
            >
              <div className="bg-black p-2 rounded-full group-hover:bg-primary/10 transition-all duration-300 w-10 h-10 flex items-center justify-center">
                <img
                  src={chain.icon || "/placeholder.svg"}
                  alt={`${chain.name} logo`}
                  className="w-6 h-6 object-contain"
                />
              </div>
              <span className="font-medium text-sm md:text-base">{chain.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

