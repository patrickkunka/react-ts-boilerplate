import * as React from 'react';

import * as ServiceUrls from '../../Services/Constants/ServiceUrls';
import fetchData from '../../Services/fetchData';
import Main from '../Main/Main';

interface IAppState {
    message: string;
}

class App extends React.PureComponent<{}, IAppState> {
    public state: IAppState = {
        message: ''
    };

    public async componentDidMount(): Promise<void> {
        const response = await fetchData(ServiceUrls.MOCK_SERVICE);

        if (!response.success) {
            // Handle error
        }

        this.setState({
            message: response.data?.message ?? ''
        });
    }

    public render(): JSX.Element {
        const {
            message
        } = this.state;

        return (
            <Main message={message}/>
        );
    }
}

export default App;
