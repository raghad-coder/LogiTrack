// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import shipmentReducer from '../features/shipments/shipmentSlice';

export const store = configureStore({
  reducer: {
    shipments: shipmentReducer,
  },
});

// السطرين دول مهمين جداً في الـ TypeScript عشان يخلونا نستخدم الـ State والـ Dispatch بأنواعها المظبوطة
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;