    var Observable = Rx.Observable,
        CompositeDisposable = Rx.CompositeDisposable,
        RefCountDisposable = Rx.RefCountDisposable,
        SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
        SerialDisposable = Rx.SerialDisposable,
        Subject = Rx.Subject,
        observableProto = Observable.prototype,
        observableEmpty = Observable.empty,
        AnonymousObservable = Rx.AnonymousObservable,
        observerCreate = Rx.Observer.create,
        addRef = Rx.internals.addRef,
        defaultComparer = Rx.internals.isEqual,
        noop = Rx.helpers.noop;
    