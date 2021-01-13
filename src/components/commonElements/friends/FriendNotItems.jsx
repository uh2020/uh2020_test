import EyeIcon from '../../icons/bar/EyeIconIcon';
import LikeIcon from '../../icons/friend/LikeIcon';
import LikeRedIcon from '../../icons/friend/LikeRedIcon';
import { ButtonBrownLine } from '../buttons/Buttons';

export const PetsCardItem = (props) => {
  return (
    <div className="fr__post-item">
      <div
        className="fr__post-item-img"
        style={{
          backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
        }}
      >
        <div className="fr__post-item-like">
          <LikeIcon />
          {/* <LikeRedIcon /> */}
        </div>
      </div>
      <div className="fr__post-item-underImg">
        <div>
          <h4 className="fr__post-item-title">
            Пропал кобель курцхаар в районе озера Байкал
          </h4>
          <p className="fr__post-item-name">Имя автора</p>
        </div>
        <div className="fr__post-item-text">
          Санта-Крус-де-Тенерифе, Канарск...
        </div>
        <div className="fr__post-item-bottom">
          <div className="fr__post-item-date">24.09.2020</div>
          <ButtonBrownLine text="Подробнее" />
        </div>
      </div>
    </div>
  );
};
export const MarketCardItem = (props) => {
  return (
    <div className="fr__post-item">
      <div
        className="fr__post-item-img"
        style={{
          backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
        }}
      >
        <div className="fr__post-item-like">
          <LikeIcon />
          {/* <LikeRedIcon /> */}
        </div>
      </div>
      <div className="fr__post-item-underImg">
        <div>
          <h4 className="fr__post-item-title">
            Пропал кобель курцхаар в районе озера Байкал
          </h4>
          <p className="fr__post-item-name">Имя автора</p>
        </div>
        <div className="fr__post-item-text">
          Санта-Крус-де-Тенерифе, Канарск...
        </div>
        <div className="fr__post-item-bottom">
          <div className="fr__post-item-price">
            179 890₽ <span>2 316₽</span>
          </div>
          <ButtonBrownLine text="Подробнее" />
        </div>
      </div>
    </div>
  );
};
export const BookingCardItem = (props) => {
  return (
    <div className="fr__post-item">
      <div
        className="fr__post-item-img"
        style={{
          backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
        }}
      >
        <div className="fr__post-item-like">
          <LikeIcon />
          {/* <LikeRedIcon /> */}
        </div>
      </div>
      <div className="fr__post-item-underImg">
        <div>
          <h4 className="fr__post-item-title">
            Пропал кобель курцхаар в районе озера Байкал
          </h4>
          <p className="fr__post-item-name">Имя автора</p>
        </div>
        <div className="fr__post-item-text">
          Санта-Крус-де-Тенерифе, Канарск...
        </div>
        <div className="fr__post-item-bottom">
          <div className="fr__post-item-booking">
            от 2 316₽ <span>/ сутки</span>
          </div>
          <ButtonBrownLine text="Подробнее" />
        </div>
      </div>
    </div>
  );
};
export const LibraryArticleCardItem = (props) => {
  return (
    <div className="fr__post-item">
      <div
        className="fr__post-item-img"
        style={{
          backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
        }}
      >
        <div className="fr__post-item-like">
          {/* <LikeIcon /> */}
          <LikeRedIcon />
        </div>
      </div>
      <div className="fr__post-item-underImg">
        <div>
          <h4 className="fr__post-item-title">
            Пропал кобель курцхаар в районе озера Байкал
          </h4>
          <p className="fr__post-item-name">Имя автора</p>
        </div>
        <div className="fr__post-item-bottom">
          <div className="fr__post-item-date-eye">
            <p>24.09.2020</p>
            <span>
              <EyeIcon width="24" height="24" />
              45
            </span>
          </div>
          <ButtonBrownLine text="Подробнее" />
        </div>
      </div>
    </div>
  );
};
export const LibraryStoryCardItem = (props) => {
  return (
    <div className="fr__post-item">
      <div
        className="fr__post-item-img"
        style={{
          backgroundImage: `url("https://wallbox.ru/wallpapers/main2/201724/149752505259426b3cf3a916.08809280.jpg")`,
        }}
      >
        <div className="fr__post-item-like">
          <LikeIcon />
          {/* <LikeRedIcon /> */}
        </div>
      </div>
      <div className="fr__post-item-underImg">
        <div>
          <h4 className="fr__post-item-title">
            Пропал кобель курцхаар в районе озера Байкал
          </h4>
          <p className="fr__post-item-name">Имя автора</p>
        </div>
        <div className="fr__post-item-bottom">
          <div className="fr__post-item-date-eye">
            <p>24.09.2020</p>
            <span>
              <EyeIcon width="24" height="24" />
              45
            </span>
          </div>
          <ButtonBrownLine text="Подробнее" />
        </div>
      </div>
    </div>
  );
};
