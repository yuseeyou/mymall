import axios from 'axios'

export function getHomeData() {
  return axios.get('http://123.207.32.32:8000/api/v1/home/multidata')
}

export function getHomeGoods(type, page) {
  return axios({
    url: 'http://123.207.32.32:8000/api/v1/home/data',
    method: 'get',
    params: {
      type,
      page
    }
  })
}
