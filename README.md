# alertor-library

```
$ npm i --save alertor-library
$ yarn add alertor-library
```

Easy way to integrate notifications into your application.

```
import { AlertContainer, alertService } from 'alertor-library'
```

This is literally all you need.

Just put <Alert Portal /> component to any place of of your application and get fun!

```
const App = (props) => {
    return (
            <ErrorBoundary>
                <MyAwesomeApplication />
                <AlertContainer />
            </ErrorBoundary>
    );
};
```

Call addAlert method of the alertService you imported before for any action you want to track, and alertor-library will do its job.

```
const someImpotantFunc = () => {
    try {
        // some impotant action
        alertService.addAlert({
            type: "success",
            title: "Hooray! Action was success!"
            description: "We did impotant work"
        })
    } catch(e) {
        alertService.addAlert({
            type: "error",
            title: "Something went wrong!"
            description: "Try one more time!"
        })
    }
}
```

## Customization

alertService.addAlert() method accepts an object with the following fields:

-   position (string type, can be **'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'**)
-   spawnAnimation (string type, can be **'smooth-sliding-in' | 'fade-in'**)
-   fadeAnimation (string type, can be **'smooth-sliding-out' | 'fade-out'**)
-   type (string type, can be **'alert' | 'success' | 'warning' | 'error'**)
-   visibleTime (number type, set time of the visible of the notification in **MS**)
-   title (string type, title for your notification **no more 30 symbols**)
-   description (string type, description for your notification **no more 30 symbols**)
-   indent (string type, can be **'small' | 'medium' | 'large'**)
-   color (string type, any color for notification background)

```
alertService.addAlert({
    position: 'top-left',
    spawnAnimation: 'smooth-sliding-in',
    fadeAnimation: 'fade-out',
    type: 'alert',
    visibleTime: 5000,
    title: 'Notification title!',
    description: 'Notification alert description!',
    indent: 'small',
    color: '#00b2ff',
})
```

Ok, that's all. Found bugs? Feel free to open issue.

Have a good day!
