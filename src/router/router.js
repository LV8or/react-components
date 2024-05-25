import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import HomePage from "../pages/HomePage";
import AccordionPage from "../pages/AccordionPage";
import CustomTabsPage from "../pages/CustomTabsPage";
import GitHubFinderPage from './../pages/GitHubFinderPage';
import ImageSliderPage from './../pages/ImageSliderPage';
import LoadMorePage from './../pages/LoadMorePage';
import NotesPage from './../pages/NotesPage';
import QRCodePage from './../pages/QRCodePage';
import RandColorPage from './../pages/RandColorPage';
import ScrollIndPage from './../pages/ScrollIndPage';
import ScrollToSectPage from './../pages/ScrollToSectPage';
import SearchAutoCompletePage from './../pages/SearchAutoCompletePage';
import StarRatingPage from './../pages/StarRatingPage';
import TicTacToePage from './../pages/TicTacToePage';
import UseClickOutsidePage from './../pages/UseClickOutsidePage';
import UseWinResizePage from './../pages/UseWinResizePage';

export const router = createBrowserRouter([
    { 
        path: "/", 
        element: <Root/>,
        children: [
            { index: true, element: <HomePage/> },
            { path: "/accordion", element: <AccordionPage/> },
            { path: "/custom-tabs", element: <CustomTabsPage/> },
            { path: "/github-finder", element: <GitHubFinderPage/> },
            { path: "/image-slider", element: <ImageSliderPage/> },
            { path: "/load-more", element: <LoadMorePage/> },
            { path: "/notes", element: <NotesPage/> },
            { path: "/qrcode", element: <QRCodePage/> },
            { path: "/randcolor", element: <RandColorPage/> },
            { path: "/scrollind", element: <ScrollIndPage/> },
            { path: "/scroll-to-sect", element: <ScrollToSectPage/> },
            { path: "/search-auto-complete", element: <SearchAutoCompletePage/> },
            { path: "/star-rating", element: <StarRatingPage/> },
            { path: "/tic-tac-toe", element: <TicTacToePage/> },
            { path: "/use-click-outside", element: <UseClickOutsidePage/> },
            { path: "/use-win-resize", element: <UseWinResizePage/> }
        ]
    },
    
    
]);

