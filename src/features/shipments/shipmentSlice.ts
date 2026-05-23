// src/features/shipments/shipmentSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Shipment } from '../../types';

interface ShipmentState {
  items: Shipment[];
  loading: boolean;
  error: string | null;
  selectedShipment: Shipment | null;
}

const initialState: ShipmentState = {
  items: [],
  loading: false,
  error: null,
  selectedShipment: null,
};

const shipmentSlice = createSlice({
  name: 'shipments',
  initialState,
  reducers: {
    // لما نيجي نضيف شحنة جديدة من الفورم
    addShipment: (state, action: PayloadAction<Shipment>) => {
      state.items.unshift(action.payload); // بنضيفها في الأول
    },
    // لما السائق يغير حالة الشحنة (توصيل / إلغاء)
    updateShipmentStatus: (state, action: PayloadAction<{ id: string; status: Shipment['status'] }>) => {
      const shipment = state.items.find(item => item.id === action.payload.id);
      if (shipment) {
        shipment.status = action.payload.status;
        shipment.updatedAt = new Date().toISOString();
      }
    },
    // هحتاجها بعدين لما نجيب البيانات من الـ IndexedDB أو السيرفر
    setShipments: (state, action: PayloadAction<Shipment[]>) => {
      state.items = action.payload;
    }
  },
});

export const { addShipment, updateShipmentStatus, setShipments } = shipmentSlice.actions;
export default shipmentSlice.reducer;