export const COLORS = ['#E5E7EB', '#3B82F6'];

export const formatCurrency = (value: number) => `$${value.toLocaleString()}`;
export const formatTime = (value: number) => `${value} minutes`;
export const formatPatients = (value: number) => `${value} patients`;

export const tooltipStyle = {
  fontSize: '11px',
  padding: '6px 8px',
  background: 'rgba(255, 255, 255, 0.95)',
  border: 'none',
  borderRadius: '6px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
};

export const chartTextStyle = {
  fontSize: '10px',
  fill: '#6B7280'
}; 