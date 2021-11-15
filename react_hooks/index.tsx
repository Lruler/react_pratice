// 自定义Hooks处理表单
import React, { useState, useCallback } from 'react'

// 基本实现
const useForm = (initialValues = {}) => {

        // 设置整个form的状态values
    
        const [values, setValues] = useState(initialValues)
    
        const setFieldValue = useCallback((name,value) => {
    
            setValues(value  => ({
    
                ...values,
    
                [name]: value
    
            }))
    
        }, [])
    
        return { values, setFieldValue }
    
    }