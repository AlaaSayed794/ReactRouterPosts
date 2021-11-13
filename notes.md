## steps for using browser router (use version 5.2.0)
1) wrap your app with BrowserRouter
2) add Route component for different routing paths:
- route can take exact or without exact (exact matches this path only)
- route can take render( when you want to pass props to the component) function or component variable
3) use Link component , with props "to" to navigate to the routes


## using react bootstrap 
- follow getting started steps https://react-bootstrap.github.io/getting-started/introduction
- see Layout and components tabs
- any component can be rendered as another component using as={} (see header component where we rendered navigations as react router links)
