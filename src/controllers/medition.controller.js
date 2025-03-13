import Medition from '../models/medition.model';
import User from '../models/user.model';

export const createMedition = async (req, res) => {
  const { ldr, soilHumidity, soilState, humidity, temperature, date, user } = req.body;

  try {
    // Verifica si el usuario existe
    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    const medition = new Medition({
      ldr,
      soilHumidity,
      soilState,
      humidity,
      temperature,
      date,
      user
    });

    await medition.save();
    return res.status(201).json(medition);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMeditions = async (req, res) => {
    const { userId } = req;
  
    try {
      // Verifica si el usuario existe
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Encuentra todas las mediciones asociadas al usuario
      const meditions = await Medition.find({ user: userId });
  
      return res.status(200).json(meditions);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  

  export const getMeditionById = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
  
    try {
      // Verifica si el usuario existe
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Encuentra la medición por su ID
      const medition = await Medition.findById(id);
      if (!medition) {
        return res.status(404).json({ message: 'Medition not found' });
      }
  
      // Verifica que la medición esté asociada al usuario
      if (medition.user.toString() !== userId) {
        return res.status(403).json({ message: 'Access forbidden' });
      }
  
      return res.status(200).json(medition);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  

  export const updateMedition = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
    const { ldr, soilHumidity, soilState, humidity, temperature, date } = req.body;
  
    try {
      // Verifica si el usuario existe
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Encuentra la medición
      const medition = await Medition.findById(id);
      if (!medition) {
        return res.status(404).json({ message: 'Medition not found' });
      }
  
      // Verifica que la medición esté asociada al usuario
      if (medition.user.toString() !== userId) {
        return res.status(403).json({ message: 'Access forbidden' });
      }
  
      // Actualiza la medición
      medition.ldr = ldr || medition.ldr;
      medition.soilHumidity = soilHumidity || medition.soilHumidity;
      medition.soilState = soilState || medition.soilState;
      medition.humidity = humidity || medition.humidity;
      medition.temperature = temperature || medition.temperature;
      medition.date = date || medition.date;
  
      await medition.save();
  
      return res.status(200).json(medition);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  
  export const deleteMedition = async (req, res) => {
    const { userId } = req;
    const { id } = req.params;
  
    try {
      // Verifica si el usuario existe
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Encuentra la medición
      const medition = await Medition.findById(id);
      if (!medition) {
        return res.status(404).json({ message: 'Medition not found' });
      }
  
      // Verifica que la medición esté asociada al usuario
      if (medition.user.toString() !== userId) {
        return res.status(403).json({ message: 'Access forbidden' });
      }
  
      // Elimina la medición
      await medition.remove();
  
      return res.status(200).json({ message: 'Medition deleted' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  