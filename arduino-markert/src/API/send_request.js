import { useState, useCallback } from 'react';
import request from './request';


function SendRequest() {

    const [send_request, setSend_request] = useState({
        isLoading: false,
        isSuccess: false,
        isFaile: false,
        data: null,
        error: null
    });

    const fetchData = useCallback(
        async ({ url, method, }) => {
            try {

                setSend_request({
                    isLoading: true,
                    isSuccess: false,
                    isFaile: false,
                    error: null,
                    data: null,
                });

                const result = await request({ url, method, });
                setSend_request({
                    isLoading: false,
                    isSuccess: true,
                    isFaile: false,
                    data: result,
                });
                return result;

            } catch (error) {
                setSend_request({
                    isLoading: false,
                    isSuccess: false,
                    isFaile: true,
                    data: null,
                });
            }
        },
        [],
    )
    return [send_request, fetchData];
}

export default SendRequest;