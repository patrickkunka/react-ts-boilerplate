import IResponse from './Interfaces/IResponse';

const fetchData = async (url: string): Promise<IResponse> => {
    const response: IResponse = {
        data: null,
        success: true,
        error: ''
    };

    let fetchResponse: Response;

    try {
        fetchResponse = await window.fetch(url);
    } catch (err) {
        // Handle network error

        response.success = false;
        response.error = 'Network error';

        return response;
    }

    if (!fetchResponse.ok) {
        // Handle status error

        response.success = false;
        response.error = status.toString();

        return response;
    }

    try {
        response.data = await fetchResponse.json();
    } catch (err) {
        response.success = false;
        response.error = 'Malformed response';
    }

    return response;
};

export default fetchData