interface MenuItem {
  name: string
  price?: string
}

interface MenuSection {
  title: string
  items: MenuItem[]
  note?: string
}

interface MenuGroup {
  title: string
  description: string
  sections: MenuSection[]
}

const menuGroups: MenuGroup[] = [
  {
    title: 'Cocteleria de autor',
    description: 'Selecciones de la carta publicada por el bar.',
    sections: [
      {
        title: 'Cocteles con whisky',
        items: [
          { name: 'Old Fashion', price: '$4.500' },
          { name: 'Padrino', price: '$4.500' },
          { name: 'John Collins', price: '$4.500' },
          { name: 'Manhattan', price: '$4.500' },
          { name: 'Clavo Oxidado', price: '$5.000' },
        ],
      },
      {
        title: 'Cocteles con tequila',
        items: [
          { name: 'Tequila Margarita', price: '$4.000' },
          { name: 'Tequila Blue', price: '$4.000' },
          { name: 'Tequila Sunrise', price: '$4.000' },
        ],
      },
      {
        title: 'Cocteles con gin',
        items: [
          { name: 'Alexander', price: '$4.500' },
          { name: 'Tom Collins', price: '$4.500' },
          { name: 'Martini Dulce', price: '$4.500' },
          { name: 'Martini Demi Sec', price: '$4.500' },
          { name: 'Martini Dry', price: '$5.000' },
        ],
      },
      {
        title: 'Cocteles con ron',
        items: [
          { name: 'Caipirisima', price: '$4.000' },
          { name: 'Piña Colada', price: '$5.000' },
          { name: 'Summer Blue', price: '$5.000' },
          { name: 'Daiquiri', price: '$4.000' },
          { name: 'Daiquiri sabores', price: '$5.000' },
        ],
      },
      {
        title: 'Cocteles con vodka',
        items: [
          { name: 'Caipiroska', price: '$4.000' },
          { name: 'Ruso Negro', price: '$4.000' },
          { name: 'Ruso Blanco', price: '$4.500' },
          { name: 'Laguna Azul', price: '$4.000' },
          { name: 'Orgasmo', price: '$5.000' },
          { name: 'Cosmopolitan', price: '$4.000' },
          { name: 'Apple Martini', price: '$4.000' },
        ],
      },
      {
        title: 'Sour clasicos',
        items: [
          { name: 'Pisco sour', price: '$3.000' },
          { name: 'Whisky sour', price: '$3.000' },
          { name: 'Amaretto sour', price: '$3.000' },
          { name: 'Jerez sour', price: '$3.000' },
          { name: 'Sour sabores', price: '$3.000' },
        ],
      },
      {
        title: 'Cocteles clasicos',
        items: [
          { name: 'Caipirinha', price: '$4.000' },
          { name: 'Aperol Spritz', price: '$5.000' },
          { name: 'Ramazzotti', price: '$5.000' },
          { name: 'Negroni', price: '$5.000' },
        ],
      },
      {
        title: 'Mojitos',
        items: [
          { name: 'Mojito cubano', price: '$5.000' },
          { name: 'Mojito imperial', price: '$5.000' },
          { name: 'Mojito irlandes', price: '$5.000' },
          { name: 'Mojito polaco', price: '$5.000' },
          { name: 'Mojito sabores', price: '$6.000' },
        ],
      },
    ],
  },
  {
    title: 'Cafe y sin alcohol',
    description: 'Opciones frias y refrescantes para cualquier momento.',
    sections: [
      {
        title: 'Cold coffe',
        items: [
          { name: 'Espresso naranja', price: '$4.500' },
          { name: 'Espresso Martini', price: '$4.500' },
          { name: 'Iced Latte', price: '$4.500' },
          { name: 'Affogato', price: '$4.500' },
          { name: 'Iced Capuccino', price: '$4.500' },
          { name: 'Dalgona', price: '$4.500' },
          { name: 'Mocca', price: '$4.500' },
          { name: 'Iced Coffe Honey', price: '$4.500' },
        ],
      },
      {
        title: 'Cocteles sin alcohol',
        items: [
          { name: 'Mojito sin alcohol', price: '$3.000' },
          { name: 'Frampirinha', price: '$3.000' },
          { name: 'Primavera sin alcohol', price: '$3.500' },
        ],
      },
      {
        title: 'Jugos naturales',
        items: [
          { name: 'Frambuesa', price: '$3.000' },
          { name: 'Frutilla', price: '$3.000' },
          { name: 'Piña', price: '$3.000' },
          { name: 'Mango', price: '$3.000' },
          { name: 'Chirimoya', price: '$3.000' },
        ],
      },
      {
        title: 'Limonadas',
        items: [
          { name: 'Clasica', price: '$3.000' },
          { name: 'Menta', price: '$3.000' },
          { name: 'Piña', price: '$3.000' },
          { name: 'Jengibre', price: '$3.000' },
          { name: 'Albahaca', price: '$3.000' },
        ],
      },
    ],
  },
  {
    title: 'Barra',
    description: 'Destilados, licores y copas con los valores visibles en la carta.',
    sections: [
      {
        title: 'Piscos',
        items: [
          { name: 'Mistral 35°', price: '$4.000' },
          { name: 'Mistral 40°', price: '$5.000' },
          { name: 'Alto del Carmen 35°', price: '$4.000' },
          { name: 'Alto del Carmen 40°', price: '$5.000' },
        ],
      },
      {
        title: 'Ron',
        items: [
          { name: 'Havana especial', price: '$4.000' },
          { name: 'Pampero especial', price: '$4.000' },
        ],
      },
      {
        title: 'Whisky',
        items: [
          { name: 'Ballantines', price: '$4.000' },
          { name: 'Johnny Walker Red Label', price: '$5.000' },
          { name: 'Johnny Walker Black Label', price: '$8.000' },
          { name: "Jack Daniel's N°7", price: '$5.500' },
          { name: "Jack Daniel's Honey", price: '$6.500' },
        ],
      },
      {
        title: 'Vodka',
        items: [
          { name: 'Stolichnaya', price: '$4.000' },
          { name: 'Abs blue', price: '$5.000' },
          { name: 'Abs sabores', price: '$6.500' },
        ],
      },
      {
        title: 'Gin',
        items: [
          { name: 'Beefeater', price: '$5.000' },
          { name: 'Tanqueray', price: '$6.000' },
        ],
      },
      {
        title: 'Licores y cremas',
        items: [
          { name: 'Baileys', price: '$5.000' },
          { name: 'Drambuie', price: '$5.000' },
          { name: 'Fernet branca', price: '$5.000' },
          { name: 'Jagermeister', price: '$5.000' },
          { name: 'Campari', price: '$5.000' },
          { name: 'Araucano', price: '$5.000' },
        ],
      },
    ],
  },
  {
    title: 'Cervezas, vinos y promos',
    description: 'La cerveza de la casa es Trilogia del Sur.',
    sections: [
      {
        title: 'Cervezas',
        items: [
          { name: 'Artesanal Trilogia del Sur', price: '$4.000' },
          { name: 'Cerveza nacional', price: '$3.000' },
          { name: 'Cerveza importada', price: '$2.500' },
          { name: 'Cerveza sin alcohol', price: '$3.000' },
        ],
        note: 'Variedades visibles: pale ale, ambar, stout y calafate.',
      },
      {
        title: 'Extras',
        items: [
          { name: 'Michelada' },
          { name: 'Michelada merken' },
          { name: 'Michelada jengibre', price: '$1.000' },
        ],
      },
      {
        title: 'Vinos',
        items: [
          { name: 'Misiones de Rengo', price: '$8.000' },
        ],
        note: 'Variedades visibles: Merlot, Cabernet Sauvignon, Carmenere, Sauvignon Blanc y Chardonnay.',
      },
      {
        title: 'Promocion destacada',
        items: [
          { name: '2 schop Trilogia del Sur + Chorrillanita a lo pobre', price: '$10.000' },
        ],
        note: 'Tambien se indica: cocina habilitada hasta las 00:30 am.',
      },
    ],
  },
]

function MenuSectionCard({ section }: { section: MenuSection }) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-xl font-bold text-combi-dark">{section.title}</h3>
      <div className="space-y-3">
        {section.items.map((item) => (
          <div
            key={`${section.title}-${item.name}`}
            className="flex items-start justify-between gap-4 border-b border-dashed border-gray-200 pb-3 last:border-b-0 last:pb-0"
          >
            <p className="text-gray-800">{item.name}</p>
            <span className="whitespace-nowrap font-semibold text-combi-green">
              {item.price ?? 'Consultar'}
            </span>
          </div>
        ))}
      </div>
      {section.note ? (
        <p className="mt-4 text-sm text-gray-500">{section.note}</p>
      ) : null}
    </article>
  )
}

export default function MenuPage() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-10 md:py-14">
        <div className="mx-auto mb-10 max-w-3xl text-center">
       
          <h1 className="mb-4 text-4xl font-bold text-combi-dark md:text-5xl">
            Nuestra Carta
          </h1>
        </div>

        <section className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-black p-6 text-white shadow-lg">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-combi-green">
              Destacado
            </p>
            <h2 className="mb-2 text-2xl font-bold">Trilogia del Sur</h2>
            <p className="text-gray-300">
              Marca de cerveza trabajada por el bar. En la carta aparecen pale ale, ambar, stout y calafate.
            </p>
          </div>
          <div className="rounded-2xl bg-combi-green p-6 text-white shadow-lg">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white/80">
              Promo visible
            </p>
            <h2 className="mb-2 text-2xl font-bold">$10.000</h2>
            <p>2 schop Trilogia del Sur + Chorrillanita a lo pobre.</p>
            <p className="mt-2 text-sm text-white/80">Cocina habilitada hasta las 00:30 am.</p>
          </div>
        </section>

        <div className="space-y-10">
          {menuGroups.map((group) => (
            <section key={group.title}>
              <div className="mb-5">
                <h2 className="text-2xl font-bold text-combi-dark md:text-3xl">{group.title}</h2>
                <p className="mt-2 text-gray-600">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {group.sections.map((section) => (
                  <MenuSectionCard key={section.title} section={section} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}