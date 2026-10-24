export const COLORS = ['#E5E7EB', '#3B82F6'];

// ROI Calculator Constants
export const ROI_CONSTANTS = {
  WEEKS_PER_YEAR: 48,
  TIME_SAVED_PERCENTAGE: 0.7, // 70% time saved per note
  EFFICIENCY_INCREASE_PERCENTAGE: 0.7, // 70% efficiency increase
  DEFAULT_VALUES: {
    patientsPerDay: 20,
    minutesPerNote: 15,
    daysPerWeek: 5,
    hourlyRate: 150,
  },
  PATIENT_CARE: {
    BEFORE: 30, // minutes before MedAlly
    AFTER: 45,  // minutes after MedAlly
  },
  FOLLOW_UPS: {
    BEFORE: 15, // minutes before MedAlly
    AFTER: 10,  // minutes after MedAlly
  },
  MONTHLY_GROWTH_RATE: 0.1, // 10% monthly growth rate
};

// ROI Calculation function
export const calculateROI = (formData: {
  patientsPerDay: number;
  minutesPerNote: number;
  daysPerWeek: number;
  hourlyRate: number;
}) => {
  const { WEEKS_PER_YEAR, TIME_SAVED_PERCENTAGE } = ROI_CONSTANTS;
  const timePerNote = formData.minutesPerNote;
  const savedTimePerNote = timePerNote * TIME_SAVED_PERCENTAGE;
  const totalPatientsPerYear = formData.patientsPerDay * formData.daysPerWeek * WEEKS_PER_YEAR;
  const totalHoursSavedPerYear = (savedTimePerNote * totalPatientsPerYear) / 60;
  const monetaryValue = totalHoursSavedPerYear * formData.hourlyRate;

  return {
    hoursSaved: Math.round(totalHoursSavedPerYear),
    moneySaved: Math.round(monetaryValue),
    patientsPerYear: totalPatientsPerYear,
    additionalPatientsCapacity: Math.round(totalHoursSavedPerYear * (60 / timePerNote)),
  };
};

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