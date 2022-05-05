import FavoritesContext from "../store/favorite-context";
import { useContext } from "react";
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if(favoritesCtx.totalFavorites===0){
    content=<h2>No Favorites Available!</h2>
  }else{
    content=<MeetupList meetups={favoritesCtx.favorites}/>
  }
  

  return (
    <div>
      <h1>My Favorites</h1>
      <section>
          {content}
      </section>
    </div>
  );
}

export default FavoritesPage;
