// src/types/index.ts

export type ShipmentStatus = 'Pending' | 'In Transit' | 'Delivered' | 'Cancelled';

export interface LocationCoordinates {
  lat: number;
  lng: number;
  address?: string;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  senderName: string;
  receiverName: string;
  status: ShipmentStatus;
  weight: number; // بالكيلوجرام
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  coordinates: {
    origin: LocationCoordinates;
    destination: LocationCoordinates;
    current?: LocationCoordinates; // الإحداثيات الحالية أثناء التحرك
  };
  driverId?: string;
  createdAt: string;
  updatedAt: string;
  isSynced?: boolean; // هتحتاجها جداً في الـ Offline Mode عشان نعرف الشحنة ارفعت عالسيرفر ولا لسه
}

export interface Driver {
  id: string;
  name: string;
  vehicleNumber: string;
  currentLocation: LocationCoordinates;
  status: 'Available' | 'On Delivery' | 'Offline';
}