//Get the fuel factor, kgCO2 per litre
//All motorcycles are petrol
fuelFac = dataFinder.getDataItemValue('business/energy/fuel/defra', 'fuel=petrol,netOrGross=net,unit=volume', 'kgCO2PerUnit');

//if total fuel consumed entered just multiply by fuel fac
try{
  totalFuelConsumed * fuelFac;
}
//else do normal calc
catch(err){

// now calculate the kgCO2e emissions
fac=0.;
if(ownFuelConsumption!=null && ownFuelConsumption>0){
    fac=fuelFac/ownFuelConsumption;
}

else {
    fac= kgCO2PerKm + kgCO2ePerKmForCH4 + kgCO2ePerKmForN2O;
}

if(occupants>0)
    fac * distance/occupants * numberOfJourneys;
else 
    fac * distance * numberOfJourneys;
}
