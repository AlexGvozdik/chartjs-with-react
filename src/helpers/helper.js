export const converter2Labels = (str) => {
    return str.split(',')
  }
export const converter2Values = (str) => {
    return str.split(',').map(item=>Number(item))
}
export const delay = (ms) => new Promise(res => setTimeout(() => res(console.log('delay', ms)), ms))