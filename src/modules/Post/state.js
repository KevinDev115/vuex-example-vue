export const defaultAutomaticPortfolioDelivery = () => {

  return {
    expiration_days_from: null,
    expiration_days_until: null,
    frecuency: null,
    time: null,
    pre_legal_charge: null,
  }
}



export default {
  response: false,
  portfolio: [],
  copyPortfolio: [],
  automaticPortfolioDelivery: defaultAutomaticPortfolioDelivery(),
  params:{
    perPage:1,
    page:1
  }
}
