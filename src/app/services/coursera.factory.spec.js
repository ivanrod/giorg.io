'use strict';
describe("Coursera API helper function ", function() {
  var CourseraFactory;

  beforeEach(module("giorgio"));

  beforeEach(inject(function (_CourseraFactory_) {
    CourseraFactory = _CourseraFactory_;
  }));

  it('should have a method which takes all user enrollments', inject(function(){
  	expect(CourseraFactory.getUserEnrollments).toBeDefined();
  }));

  it('should have a method which takes all user enrollments data', inject(function(){
  	expect(CourseraFactory.getEnrollmentsData).toBeDefined();
  }));
});