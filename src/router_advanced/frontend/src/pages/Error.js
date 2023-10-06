import { useRouterError } from 'react-router-dom';
import PageContent from '../components/PageContent';
import MainNavigation from '../components/MainNavigation';

function ErrorPage() {
    const error = useRouterError();

    let title = 'An error ocurred...';
    let message = 'Something went wrong!'

    if (error.status === 500) {
        message = error.data.message
    }

    if (error.status === 404) {
        title= 'Not found!'
        message = 'Colud not reach this page!'
    }
    return (
       <>
        <MainNavigation></MainNavigation>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
       </>
    );
};

export default ErrorPage;