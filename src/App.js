import * as React from "react";
import {
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

import 'App.css';

// ApplicationUI/ApplicationShells/StackedLayouts
import BrandSidebarWithHeader from 'components/Partials/ApplicationUI/ApplicationShells/SidebarLayouts/BrandSidebarWithHeader/index.jsx';

// ApplicationUI/ApplicationShells/StackedLayouts
import DarkNavWithWhitePageHeader from 'components/Partials/ApplicationUI/ApplicationShells/StackedLayouts/DarkNavWithWhitePageHeader/index.jsx';

// ApplicationUI/Forms
import LabelsOnLeft from 'components/Partials/ApplicationUI/Forms/FormsLayout/LabelsOnLeft/index.jsx';
import Stacked from 'components/Partials/ApplicationUI/Forms/FormsLayout/Stacked/index.jsx';
import TwoColumn from 'components/Partials/ApplicationUI/Forms/FormsLayout/TwoColumn/index.jsx';
import TwoColumnCard from 'components/Partials/ApplicationUI/Forms/FormsLayout/TwoColumnCard/index.jsx';

// ApplicationUI/Forms/SignAndRegistration/SignSimple
import SignSimple from 'components/Partials/ApplicationUI/Forms/SignAndRegistration/SignSimple/index.jsx';

// ApplicationUI/Headings/PagHeadings
import WithMetaAndActions from 'components/Partials/ApplicationUI/Headings/PagHeadings/WithMetaAndActions/index.jsx';

// ApplicationUI/Headings/CardHeadings
import WithAvatarAndActions from 'components/Partials/ApplicationUI/Headings/CardHeadings/WithAvatarAndActions/index.jsx';

// ApplicationUI/Headings/SectionHeadings
import WithActionsAndTabs from 'components/Partials/ApplicationUI/Headings/SectionHeadings/WithActionsAndTabs/index.jsx';

// ApplicationUI/DataDisplay/DescriptionLists/LeftAligned
import LeftAligned from 'components/Partials/ApplicationUI/DataDisplay/DescriptionLists/LeftAligned/index.jsx';

// ApplicationUI/DataDisplay/Stats/WithTrending
import WithTrending from 'components/Partials/ApplicationUI/DataDisplay/Stats/WithTrending/index.jsx';

// ApplicationUI/Feedback/Alerts
import WithDescription from 'components/Partials/ApplicationUI/Feedback/Alerts/WithDescription/index.jsx';
import WithActions from 'components/Partials/ApplicationUI/Feedback/Alerts/WithActions/index.jsx';

// ApplicationUI/Feedback/EmptyStates
import WithStartingPoints from 'components/Partials/ApplicationUI/Feedback/EmptyStates/WithStartingPoints/index.jsx';
import WithTemplates from 'components/Partials/ApplicationUI/Feedback/EmptyStates/WithTemplates/index.jsx';

// ApplicationUI/Lists/Feeds
import SimpleWithİcons from 'components/Partials/ApplicationUI/Lists/Feeds/SimpleWithİcons/index.jsx';

// ApplicationUI/Lists/GridLists
import ContactCards from 'components/Partials/ApplicationUI/Lists/GridLists/ContactCards/index.jsx';
import ContactCardsWithSmallPortraits from 'components/Partials/ApplicationUI/Lists/GridLists/ContactCardsWithSmallPortraits/index.jsx';
import ActionsWithSharedBorders from 'components/Partials/ApplicationUI/Lists/GridLists/ActionsWithSharedBorders/index.jsx';
import LogosCardsWithDescriptionList from 'components/Partials/ApplicationUI/Lists/GridLists/LogosCardsWithDescriptionList/index.jsx';
import LogosCardsWithDescriptionListSimple from 'components/Partials/ApplicationUI/Lists/GridLists/LogosCardsWithDescriptionListSimple/index.jsx';

// ApplicationUI/Lists/StackedLists/Simplee
import Simplee from 'components/Partials/ApplicationUI/Lists/StackedLists/Simplee';

// ApplicationUI/Lists/Tables/WithStripedRows
import WithStripedRows from 'components/Partials/ApplicationUI/Lists/Tables/WithStripedRows';
import WithStripedRowsLoop from 'components/Partials/ApplicationUI/Lists/Tables/WithStripedRowsLoop';
import WithStripedRowsState from 'components/Partials/ApplicationUI/Lists/Tables/WithStripedRowsState';
import WithStripedRowsInlineEdit from 'components/Partials/ApplicationUI/Lists/Tables/WithStripedRowsInlineEdit';

// Marketing/Elements/Headers
import Constrained from 'components/Partials/Marketing/Elements/Headers/Constrained/index.jsx';

// Marketing/Elements/Banners
import WithButton from 'components/Partials/Marketing/Elements/Banners/WithButton/index.jsx';
import WithStackedFlyoutMenu from 'components/Partials/Marketing/Elements/Banners/WithStackedFlyoutMenu/index.jsx';

// Marketing/Feedback/Simple
import Simple from 'components/Partials/Marketing/Feedback/Simple/index.jsx';

// Marketing/HeroSections
import SimpleCentered from 'components/Partials/Marketing/PageSections/HeroSections/SimpleCentered/index.jsx';
import HeroOne from 'components/Partials/Marketing/PageSections/HeroSections/HeroOne/index.jsx';

// Marketing/PageSections/PricingSections
import SinglePriceWithDetails from 'components/Partials/Marketing/PageSections/PricingSections/SinglePriceWithDetails/index.jsx';
import ThreeTiers from 'components/Partials/Marketing/PageSections/PricingSections/ThreeTiers/index.jsx';
import ThreeTiersWithDividers from 'components/Partials/Marketing/PageSections/PricingSections/ThreeTiersWithDividers/index.jsx';
import TwoTiersWithExtraTier from 'components/Partials/Marketing/PageSections/PricingSections/TwoTiersWithExtraTier/index.jsx';
import WithComparisonTable from 'components/Partials/Marketing/PageSections/PricingSections/WithComparisonTable/index.jsx';

// Marketing/PageSections/FeatureSections
import WithProductScreenshot from 'components/Partials/Marketing/PageSections/FeatureSections/WithProductScreenshot/index.jsx';

// Marketing/PageSections/CtaSecti̇ons
import DarkPanelWithAppScreenshot from 'components/Partials/Marketing/PageSections/CtaSections/DarkPanelWithAppScreenshot/index.jsx';
import WithİmageTiles from 'components/Partials/Marketing/PageSections/CtaSections/WithİmageTiles/index.jsx';

// Marketing/PageSections/Headersecti̇ons
import WithStats from 'components/Partials/Marketing/PageSections/HeadersSection/WithStats/index.jsx';
import WithCards from 'components/Partials/Marketing/PageSections/HeadersSection/WithCards/index.jsx';

// Marketing/PageSections/NewsletterSections
import SideBySideWithDetails from 'components/Partials/Marketing/PageSections/NewsletterSections/SideBySideWithDetails/index.jsx';

// Marketing/PageSections/Stats
import SimpleGrid from 'components/Partials/Marketing/PageSections/Stats/SimpleGrid/index.jsx';
import SplitWithİmage from 'components/Partials/Marketing/PageSections/Stats/SplitWithİmage/index.jsx';
import Stepped from 'components/Partials/Marketing/PageSections/Stats/Stepped/index.jsx';
import Timeline from 'components/Partials/Marketing/PageSections/Stats/Timeline/index.jsx';

// Marketing/PageSections/Testimonials
import SimpleCenteredd from 'components/Partials/Marketing/PageSections/Testimonials/SimpleCenteredd/index.jsx';
import SideBySide from 'components/Partials/Marketing/PageSections/Testimonials/SideBySide/index.jsx';
import WithOverlappingİmage from 'components/Partials/Marketing/PageSections/Testimonials/WithOverlappingİmage/index.jsx';

// Marketing/PageSections/BlogSections
import ThreeColumn from 'components/Partials/Marketing/PageSections/BlogSections/ThreeColumn/index.jsx';
import SingleColumnİmages from 'components/Partials/Marketing/PageSections/BlogSections/SingleColumnİmages/index.jsx';
import ThreeColumnWithİmages from 'components/Partials/Marketing/PageSections/BlogSections/ThreeColumnWithİmages/index.jsx';
import ThreeColumnWithBackgroundİmages from 'components/Partials/Marketing/PageSections/BlogSections/ThreeColumnWithBackgroundİmages/index.jsx';

// Marketing/PageSections/ContactSections
import Centered from 'components/Partials/Marketing/PageSections/ContactSections/Centered/index.jsx';
import SideBySideGrid from 'components/Partials/Marketing/PageSections/ContactSections/SideBySideGrid/index.jsx';
import SplitWithPattern from 'components/Partials/Marketing/PageSections/ContactSections/SplitWithPattern/index.jsx';
import SimpleFourColumn from 'components/Partials/Marketing/PageSections/ContactSections/SimpleFourColumn/index.jsx';

// Marketing/PageSections/TeamSections
import WithSmallİmages from 'components/Partials/Marketing/PageSections/TeamSections/WithSmallİmages/index.jsx';

// Marketing/PageSections/ContentSections
import WithTestimonialAndStats from 'components/Partials/Marketing/PageSections/ContentSections/WithTestimonialAndStats/index.jsx';

// Marketing/PageSections/LogoClouds
import SplitWithLogosOnRight from 'components/Partials/Marketing/PageSections/LogoClouds/SplitWithLogosOnRight/index.jsx';

// Marketing/PageSections/Faqs
import OffsetWithSupportingText from 'components/Partials/Marketing/PageSections/Faqs/OffsetWithSupportingText/index.jsx';
import Accordions from 'components/Partials/Marketing/PageSections/Faqs/Accordions/index.jsx'

// Maarketing/Footers/ColumnWithCompanyMissionOnDark
import ColumnWithCompanyMissionOnDark from 'components/Partials/Marketing/PageSections/Footers/ColumnWithCompanyMissionOnDark/index.jsx';


const routes = [
  { path: "ApplicationUI/ApplicationShells/SidebarLayouts/BrandSidebarWithHeader",
    element: <BrandSidebarWithHeader />,
  },
  { path: "ApplicationUI/ApplicationShells/StackedLayouts/DarkNavWithWhitePageHeader",
    element: <DarkNavWithWhitePageHeader />,
  },
  { path: "ApplicationUI/DataDisplay/DescriptionLists/LeftAligned",
    element: <LeftAligned />,
  },
  { path: "ApplicationUI/DataDisplay/Stats/WithTrending",
    element: <WithTrending />,
  },
  { path: "ApplicationUI/Feedback/Alerts/WithDescription",
    element: <WithDescription />,
  },
  { path: "ApplicationUI/Feedback/Alerts/WithActions",
    element: <WithActions />,
  },
  { path: "ApplicationUI/Feedback/EmptyStates/WithStartingPoints",
    element: <WithStartingPoints />,
  },
  { path: "ApplicationUI/Feedback/EmptyStates/WithTemplates",
    element: <WithTemplates />,
  },
  {
    path: "ApplicationUI/Forms/FormsLayout/LabelsOnLeft",
    element: <LabelsOnLeft />,
  },
  {
    path: "ApplicationUI/Forms/FormsLayout/Stacked",
    element: <Stacked />,
  },
  {
    path: "ApplicationUI/Forms/FormsLayout/TwoColumn",
    element: <TwoColumn />,
  },
  {
    path: "ApplicationUI/Forms/FormsLayout/TwoColumnCard",
    element: <TwoColumnCard />,
  },
  {
    path: "ApplicationUI/Forms/SignAndRegistration/SignSimple",
    element: <SignSimple />,
  },
  {
    path: "ApplicationUI/Headings/CardHeadings/WithAvatarAndActions",
    element: <WithAvatarAndActions />,
  },
  {
    path: "ApplicationUI/Headings/PagHeadings/WithMetaAndActions",
    element: <WithMetaAndActions />,
  },
  {
    path: "ApplicationUI/Headings/SectionHeadings/WithActionsAndTabs",
    element: <WithActionsAndTabs />,
  },
  {
    path: "ApplicationUI/Lists/Feeds/SimpleWithİcons",
    element: <SimpleWithİcons />,
  },
  {
    path: "ApplicationUI/Lists/GridLists/ActionsWithSharedBorders",
    element: <ActionsWithSharedBorders />,
  },
  {
    path: "ApplicationUI/Lists/GridLists/ContactCards",
    element: <ContactCards />,
  },
  {
    path: "ApplicationUI/Lists/GridLists/ContactCardsWithSmallPortraits",
    element: <ContactCardsWithSmallPortraits />,
  },
  {
    path: "ApplicationUI/Lists/GridLists/LogosCardsWithDescriptionList",
    element: <LogosCardsWithDescriptionList />,
  },
  {
    path: "ApplicationUI/Lists/GridLists/LogosCardsWithDescriptionListSimple",
    element: <LogosCardsWithDescriptionListSimple />,
  },
  {
    path: "ApplicationUI/Lists/StackedLists/Simplee",
    element: <Simplee />,
  },
  {
    path: "ApplicationUI/Lists/Tables/WithStripedRows",
    element: <WithStripedRows />,
  },
  {
    path: "ApplicationUI/Lists/Tables/WithStripedRowsLoop",
    element: <WithStripedRowsLoop />,
  },
  {
    path: "ApplicationUI/Lists/Tables/WithStripedRowsState",
    element: <WithStripedRowsState />,
  },
  {
    path: "ApplicationUI/Lists/Tables/WithStripedRowsInlineEdit",
    element: <WithStripedRowsInlineEdit />,
  },
  { path: "Marketing/Elements/Banners/WithButton",
    element: <WithButton />,
  },
  { path: "Marketing/Elements/Banners/WithStackedFlyoutMenu",
    element: <WithStackedFlyoutMenu />,
  },
  {
    path: "Marketing/Elements/Headers/Constrained",
    element: <Constrained />,
  },
  { path: "Marketing/Feedback/Simple",
    element: <Simple />,
  },
  {
    path: "Marketing/PageSections/BlogSections/SingleColumnİmages",
    element: <SingleColumnİmages />,
  },
  {
    path: "Marketing/PageSections/BlogSections/ThreeColumn",
    element: <ThreeColumn />,
  },
  {
    path: "Marketing/PageSections/BlogSections/ThreeColumnWithİmages",
    element: <ThreeColumnWithİmages />,
  },
  {
    path: "Marketing/PageSections/BlogSections/ThreeColumnWithBackgroundİmages",
    element: <ThreeColumnWithBackgroundİmages />,
  },
  {
    path: "Marketing/PageSections/ContactSections/Centered",
    element: <Centered />,
  },
  {
    path: "Marketing/PageSections/ContactSections/SimpleFourColumn/Centered",
    element: <SimpleFourColumn />,
  },
  {
    path: "Marketing/PageSections/ContactSections/SideBySideGrid/Centered",
    element: <SideBySideGrid />,
  },
  {
    path: "Marketing/PageSections/ContactSections/SplitWithPattern/Centered",
    element: <SplitWithPattern />,
  },
  {
    path: "Marketing/PageSections/ContentSections/WithTestimonialAndStats",
    element: <WithTestimonialAndStats />,
  },
  {
    path: "Marketing/PageSections/CtaSections/DarkPanelWithAppScreenshot",
    element: <DarkPanelWithAppScreenshot />,
  },
  {
    path: "Marketing/PageSections/CtaSections/WithİmageTiles",
    element: <WithİmageTiles />,
  },
  { path: "Marketing/PageSections/Faqs/OffsetWithSupportingText",
    element: <OffsetWithSupportingText />,
  },
  { path: "Marketing/PageSections/Faqs/Accordions",
    element: <Accordions />,
  },
  {
    path: "Marketing/PageSections/FeatureSections/WithProductScreenshot",
    element: <WithProductScreenshot />,
  },
  { path: "Marketing/PageSections/Footers/ColumnWithCompanyMissionOnDark",
    element: <ColumnWithCompanyMissionOnDark />,
  },
  {
    path: "Marketing/PageSections/HeroSections/HeroOne",
    element: <HeroOne />,
  },
  {
    path: "Marketing/PageSections/HeroSections/SimpleCentered",
    element: <SimpleCentered />,
  },
  {
    path: "Marketing/PageSections/HeaderSections/WithStats",
    element: <WithStats />,
  },
  { 
    path: "Marketing/PageSections/HeaderSections/WithCards/",
    element: <WithCards />,
  },
  {
    path: "Marketing/PageSections/LogoClouds/SplitWithLogosOnRight",
    element: <SplitWithLogosOnRight />,
  },
  {
    path: "Marketing/PageSections/NewsletterSections/SideBySideWithDetails",
    element: <SideBySideWithDetails />,
  },
  {
    path: "Marketing/PageSections/PricingSections/SinglePriceWithDetails",
    element: <SinglePriceWithDetails />,
  },
  {
    path: "Marketing/PageSections/PricingSections/ThreeTiers",
    element: <ThreeTiers />,
  },
  {
    path: "Marketing/PageSections/PricingSections/ThreeTiersWithDividers",
    element: <ThreeTiersWithDividers />,
  },
  {
    path: "Marketing/PageSections/PricingSections/TwoTiersWithExtraTier",
    element: <TwoTiersWithExtraTier />,
  },
  {
    path: "Marketing/PageSections/PricingSections/WithComparisonTable",
    element: <WithComparisonTable />,
  },
  {
    path: "Marketing/PageSections/Stats/SimpleGrid",
    element: <SimpleGrid />,
  },
  {
    path: "Marketing/PageSections/Stats/SplitWithİmage",
    element: <SplitWithİmage />,
  },
  {path: "Marketing/PageSections/Stats/Stepped",
    element: <Stepped />,
  },
  {
    path: "Marketing/PageSections/Stats/Timeline",
    element: <Timeline />
  },
  {
    path: "Marketing/PageSections/Testimonials/SimpleCenteredd",
    element: <SimpleCenteredd />,
  },
  {
    path: "Marketing/PageSections/Testimonials/SideBySide",
    element: <SideBySide />,
  },
  {
    path: "Marketing/PageSections/Testimonials/WithOverlappingİmage",
    element: <WithOverlappingİmage />,
  },
  {
    path: "Marketing/PageSections/TeamSections/WithSmallİmages",
    element: <WithSmallİmages />,
  },
];

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        {/* Index */}
        <Route
          path="/"
          element={<Home />}
          index
        />

        {/* Showcase */}
        <Route
          path="/showcase"
          element={<Showcase />}
        />

        {/* Elements */}
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              name={index}
            />
          )
        })}

        <Route
          path="*"
          element={<NoMatch />}
        />
      </Route>
      <Route
        path="/Blank"
        element={<LayoutBlank />}
      >
        {/* Index */}
        <Route
          path="/Blank"
          element={<Home />}
          index
        />

        {/* Elements */}
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              name={index}
            />
          )
        })}

        <Route
          path="*"
          element={<NoMatch />}
        />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="container">
      <main className="content-container">
        <div className="content">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

function LayoutBlank() {
  return <Outlet />;
}

function Home() {
  return (
    <section className="m-y-5xl">
      <div className="wrap">
        <div className="format">
          <ul>
            {routes.map((route, index) => (
              <li key={index}>
                <Link to={route.path}>
                  {route.path}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Showcase() {
  return (
    <>
      {routes.map((route, index) => {
        return (
          <>
            <Link
              key={index}
              to={`./../${route.path}`}
            >
              {route.path}
            </Link>
            {route.element}
          </>
        );
      })}
    </>
  );
}

function NoMatch() {
  return (
    <section className="m-y-5xl">
      <div className="wrap stack-x-c">
        <h1>
          404
        </h1>
      </div>
    </section>
  );
}

export default App;