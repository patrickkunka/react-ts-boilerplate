import IData from './IData';

interface IResponse {
    data: IData | null;
    error: string;
    success: boolean
}

export default IResponse;