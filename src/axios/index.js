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

export function getLiveData () {
  return $http.get ('/api/liveData')
}

export function getInfoPageData () {
  return $http.get ('/api/infoPageData')
}
export function getCourseRightData () {
  return $http.get ('/api/courseRightData')
}
export function getcourseLeftData () {
  return $http.get ('/api/courseLeftData')
}

export function getBootcampRightData () {
  return $http.get ('/api/bootcampRightData')
}

export function getBootcampLeftData () {
  return $http.get ('/api/bootcampLeftData')
}

export function getEveryCourseData () {
  return $http.get ('/api/everyCourseData')
}

export function getCaseData () {
  return $http.get ('/api/caseData')
}

export function getOpenClassData () {
  return $http.get ('/api/openClassData')
}

export function getSuggestData () {
  return $http.get ('/api/suggestData')
}

export function getMulactivityData () {
  return $http.get ('/api/mulactivityData')
}

export function getFooterData () {
  return $http.get ('/api/footerData')
}

export function getRightMenuData () {
  return $http.get ('/api/rightMenuData')
}