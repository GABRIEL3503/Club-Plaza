const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

const priceFormatter = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
})

// Se agrega la hora para que la fecha no se corra un día por la zona horaria
export const formatDate = (isoDate) => dateFormatter.format(new Date(`${isoDate}T00:00:00`))

export const formatPrice = (price) => (price === 0 ? 'Gratis' : priceFormatter.format(price))
