const resolveRoutes = route => {
    if (route.length <= 3) {
        let validatRoute = route === '/' ? route : '/:id'
        return validatRoute
    }
    return `/${route}`
}

export default resolveRoutes