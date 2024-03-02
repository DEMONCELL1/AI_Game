export const recordGameplay = (username, gameData) => {
    const date = new Date().toISOString(); 
    return {
      type: 'RECORD_GAMEPLAY',
      payload: { username, gameData, date },
    };
  };