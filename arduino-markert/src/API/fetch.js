import { useState, useCallback } from 'react';
import request from './request';


function Asynfecht() {

    const [fetchRequest, setFetchRequest] = useState({
        isLoading: false,
        isSuccess: false,
        isFaile: false,
        data: null,
        error: null
    });

    const fetchData = useCallback(
        async ({ url, method, headers }) => {
            try {

                setFetchRequest({
                    isLoading: true,
                    isSuccess: false,
                    isFaile: false,
                    error: null,
                    data: null,
                });

                const result = await request({ url, method, headers });
                setFetchRequest({
                    isLoading: false,
                    isSuccess: true,
                    isFaile: false,
                    data: result,
                });
                return result;

            } catch (error) {
                setFetchRequest({
                    isLoading: false,
                    isSuccess: false,
                    isFaile: true,
                    data: null,
                });
            }
        },
        [],
    )
    return [fetchRequest, fetchData];
}

export default Asynfecht;