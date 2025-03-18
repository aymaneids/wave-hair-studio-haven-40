
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const stylists = [
  { name: "Jessica", specialty: "Balayage & Blonding", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format" },
  { name: "Amanda", specialty: "Vivids & Color Corrections", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format" },
  { name: "Michael", specialty: "Precision Cuts & Styling", image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=400&auto=format" },
  { name: "Tiffany", specialty: "Extensions & Lived-in Color", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&auto=format" },
];

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
  "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];

const BookNow = () => {
  const [selectedStylist, setSelectedStylist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingStep, setBookingStep] = useState(1);

  const handleStylistSelect = (name: string) => {
    setSelectedStylist(name);
    setBookingStep(2);
  };

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) setBookingStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingStep(4);
  };

  const handleBookAppointment = () => {
    alert(`Booking confirmed with ${selectedStylist} on ${selectedDate?.toLocaleDateString()} at ${selectedTime}`);
    // In a real implementation, this would submit to a booking API
    setSelectedStylist(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
    setBookingStep(1);
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <section className="py-24">
        <div className="container px-4">
          <h1 className="font-tenor text-3xl md:text-5xl text-primary text-center mb-8">
            Book Your Appointment
          </h1>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Select a stylist, choose a date and time that works for you, and we'll confirm your appointment.
          </p>

          <div className="max-w-5xl mx-auto">
            {/* Step 1: Select Stylist */}
            <div className={`mb-12 ${bookingStep !== 1 ? 'opacity-50' : ''}`}>
              <h2 className="font-tenor text-2xl mb-6">1. Choose Your Stylist</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stylists.map((stylist) => (
                  <Card 
                    key={stylist.name}
                    className={`cursor-pointer hover:border-primary transition-all ${selectedStylist === stylist.name ? 'border-primary ring-2 ring-primary' : ''}`}
                    onClick={() => handleStylistSelect(stylist.name)}
                  >
                    <CardContent className="p-4">
                      <img 
                        src={stylist.image} 
                        alt={stylist.name}
                        className="w-full h-48 object-cover rounded-md mb-4" 
                      />
                      <h3 className="font-bold text-lg">{stylist.name}</h3>
                      <p className="text-muted-foreground text-sm">{stylist.specialty}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Step 2: Select Date */}
            {bookingStep >= 2 && (
              <div className={`mb-12 ${bookingStep !== 2 ? 'opacity-50' : ''}`}>
                <h2 className="font-tenor text-2xl mb-6">2. Select a Date</h2>
                <Card>
                  <CardContent className="p-6 flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={handleDateSelect}
                      className="rounded-md border"
                      disabled={(date) => 
                        date < new Date() || 
                        date.getDay() === 0 || // Sunday
                        date.getDay() === 6    // Saturday
                      }
                    />
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 3: Select Time */}
            {bookingStep >= 3 && (
              <div className={`mb-12 ${bookingStep !== 3 ? 'opacity-50' : ''}`}>
                <h2 className="font-tenor text-2xl mb-6">3. Choose a Time</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {timeSlots.map((time) => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? "default" : "outline"}
                      className="w-full"
                      onClick={() => handleTimeSelect(time)}
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Confirm Booking */}
            {bookingStep === 4 && (
              <div className="mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Confirm Your Appointment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="font-medium">Stylist:</span>
                        <span>{selectedStylist}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Date:</span>
                        <span>{selectedDate?.toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Time:</span>
                        <span>{selectedTime}</span>
                      </div>
                      <Button className="w-full mt-4" onClick={handleBookAppointment}>
                        Book Appointment
                      </Button>
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        After booking, you'll receive a confirmation email. For cancellations or changes,
                        please call us at (304) 872-1234.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;
