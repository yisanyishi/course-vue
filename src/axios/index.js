import {$http} from './http.js'

export function getHeaderAd () {
  return $http.get ('/api/headerAd')
}

export function getHeaderInfo () {
  return $http.get ('/api/headerInfo')
}

export function getSearch (data) {
  return $http.post ('/api/search',data)
}

export function getSearchLog (data) {
  return $http.post ('/api/searchlog',data)
}

export function getMenuListData () {
  return $http.get ('/api/menuListData')
}

export function getCarouselData () {
  return $http.get ('/api/carouselData')
}

export function getCarousel2Data () {
  return $http.get ('/api/carousel2Data')
}