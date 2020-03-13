import { defaultAutomaticPortfolioDelivery } from './state'



export function setResponse(state, value) {
  state.response = value;

}

export function setData(state, value1) {
  state.portfolio = value1;
}

export function setCopyData(state, value) {
  state.copyPortfolio = value;
}


export function setAutomaticPortfolioDelivery(state) {
  state.automaticPortfolioDelivery = defaultAutomaticPortfolioDelivery;
}
