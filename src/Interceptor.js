import fetchIntercept from 'fetch-intercept';
var token = "TestToken"
export const unregister = fetchIntercept.register({
    request: function (url, config) {

        // console.warn("interceptor........... app");
        config.headers.platform = "WebTest"

        // Modify the url or config here
        return [url, config];
    },

    requestError: function (error) {
        // Called when an error occurred during another 'request' interceptor call
        return Promise.reject(error);
    },

    response: function (response) {
        // Modify the response object
        return response;
    },

    responseError: function (error) {
        // Handle an fetch error 
        return Promise.reject(error); 
    }
});

// Call fetch to see your interceptors in action.
// fetch('http://google.com');

// Unregister your interceptor

